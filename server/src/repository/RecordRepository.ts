import { HealthAdaptedRecord, HealthDataKind } from "../types/types";

export class RecordRepository {
    #records: HealthAdaptedRecord[] = [];
    initRepository(data: HealthAdaptedRecord[]): void {
        this.#records = data;
    }

    getAll(): HealthAdaptedRecord[] {
        return this.#records;
    }

    getByRecordKind(kind: HealthDataKind, count: number): HealthAdaptedRecord[] {
        return this.#records.filter(r => r.type === kind).slice(0, count);
    }
}