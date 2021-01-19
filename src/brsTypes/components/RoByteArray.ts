import { BrsValue, ValueKind, BrsBoolean } from "../BrsType";
import { BrsType } from "..";
import { BrsComponent } from "./BrsComponent";
import { Callable, StdlibArgument } from "../Callable";

export class RoByteArray extends BrsComponent implements BrsValue {
    readonly kind = ValueKind.Object;

    constructor() {
        super("roByteArray");
        this.registerMethods({
            ifDeviceInfo: [this.FromAsciiString],
        });
    }

    toString(parent?: BrsType): string {
        return "<Component: roByteArray>";
    }

    equalTo(other: BrsType) {
        return BrsBoolean.False;
    }

    private FromAsciiString = new Callable("FromAsciiString", {
        signature: {
            args: [new StdlibArgument("s", ValueKind.String)],
            returns: ValueKind.String,
        },
        impl: (_, s) => {
            return this;
        },
    });
}
