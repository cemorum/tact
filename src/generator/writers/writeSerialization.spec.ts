import { CompilerContext } from "../../ast/context";
import { getAllocation, resolveAllocations } from "../../storage/resolveAllocation";
import { getType, resolveTypeDescriptors } from "../../types/resolveTypeDescriptors";
import { Writer, WriterContext } from "../Writer";
import { writeParser, writeSerializer } from "./writeSerialization";

const code = `
primitive Int;
primitive Bool;
primitive Builder;
primitive Cell;
primitive Slice;

struct A {
    var a: Int;
    var b: Int;
    var c: Int?;
    var d: Bool;
    var e: Bool?;
    var f: Int;
    var g: Int;
}
`;

describe('writeSerialization', () => {
    it('should write serializer', () => {
        let ctx = CompilerContext.fromSources([code]);
        ctx = resolveTypeDescriptors(ctx);
        ctx = resolveAllocations(ctx);
        let w = new Writer();
        let wctx = new WriterContext();
        writeSerializer(ctx, 'A', getAllocation(ctx, 'A'), w, wctx);
        writeParser(ctx, 'A', getAllocation(ctx, 'A'), w, wctx);
        console.warn(w.end());
    });
});