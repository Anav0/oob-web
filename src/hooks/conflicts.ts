import { api } from "api";
import { Api } from "api/Api";
import { Conflict } from "api/data-contracts";
import { ConflictWithAction } from "models/conflict-with-action";
import { useEffect, useState } from "react";

export function useConflicts(onCampaignChange: (campaign: Conflict) => void) {
    const [wars, setWars] = useState<ConflictWithAction[] | null>(null);
    const [selectedWar, setSelectedWar] = useState<number>(0);
    const [operations, setOperations] = useState<ConflictWithAction[] | null>(null);
    const [selectedOperation, setSelectedOperation] = useState<number>(0);
    const [campaigns, setCampaigns] = useState<ConflictWithAction[] | null>(null);

    useEffect(() => {
        async function fetch() {
            const { data: conflicts } = await api.v1ConflictsLevelDetail(0);
            if (!conflicts || conflicts.length === 0) throw new Error("No wars found in db");
            setWars(conflicts.map((conflict, i) => new ConflictWithAction(conflict, () => {
                console.log(`War clicked ${conflict}`)
                setSelectedOperation(0);
                setSelectedWar(i);
            })));
        }
        fetch()
    }, [])

    useEffect(() => {
        if (!wars || wars.length === 0) return;
        if (wars[selectedOperation].conflict.SubConflicts == null) return;

        let oper = wars[selectedWar].conflict.SubConflicts?.map((conflict, i) => new ConflictWithAction(conflict, () => {
            setSelectedOperation(i)
        }))
        setOperations(oper as ConflictWithAction[]);
    }, [wars, selectedWar])

    useEffect(() => {
        async function fetch() {
            if (!operations || operations.length === 0) return;

            const { data: operation } = await api.v1ConflictsDetail(operations[selectedOperation].conflict.Id as number);
            let campaigns = operation.SubConflicts?.map((conflict, i) => new ConflictWithAction(conflict, () => {
                onCampaignChange(conflict)
            }));
            setCampaigns(campaigns as ConflictWithAction[]);
        } fetch()

    }, [operations, selectedOperation])


    return {
        wars,
        operations,
        campaigns,
        selectedWar,
        selectedOperation,
        setSelectedWar,
        setSelectedOperation
    }

}