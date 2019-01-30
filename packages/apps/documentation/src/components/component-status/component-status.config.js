import includes from "lodash/includes";

export default function (ComponentStatusProvider) {
    "ngInject";

    const CX_DESIGN_LEVELS = {
        error: ["deprecated"],
        warning: ["none"],
        info: ["partial"],
        success: ["complete"]
    };

    const UX_LEVELS = {
        error: ["prototype"],
        warning: ["beta"],
        info: ["rc"],
        success: ["complete"]
    };

    ComponentStatusProvider.setReadmeUrl("#!/documentation/component-status");
    ComponentStatusProvider.setFindMessageTypeFunc((level, cxDesign, ux) => includes(CX_DESIGN_LEVELS[level], cxDesign) || includes(UX_LEVELS[level], ux));
}
