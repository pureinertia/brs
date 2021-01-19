import { BrsValue, ValueKind, BrsBoolean, BrsString, BrsInvalid } from "../BrsType";
import { BrsType } from "..";
import { BrsComponent } from "./BrsComponent";
import { Callable, StdlibArgument } from "../Callable";

export class RoEVPDigest extends BrsComponent implements BrsValue {
    readonly kind = ValueKind.Object;

    constructor() {
        super("roEVPDigest");
        this.registerMethods({
            ifDeviceInfo: [this.Setup, this.Process],
        });
    }

    toString(parent?: BrsType): string {
        return "<Component: roEVPDigest>";
    }

    equalTo(other: BrsType) {
        return BrsBoolean.False;
    }

    private Setup = new Callable("Setup", {
        signature: {
            args: [new StdlibArgument("digestType", ValueKind.String)],
            returns: ValueKind.Void,
        },
        impl: (_, s) => {
            return BrsInvalid.Instance;
        },
    });

    private Process = new Callable("Process", {
        signature: {
            args: [new StdlibArgument("bytes", ValueKind.Object)],
            returns: ValueKind.String,
        },
        impl: (_, s) => {
            return new BrsString("global");
        },
    });
}
