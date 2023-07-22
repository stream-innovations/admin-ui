import { AdminBuildConfig } from "./types";
import { AdminDevConfig } from "./types/dev";
declare function build(options?: AdminBuildConfig): Promise<void>;
declare function watch(): Promise<void>;
declare function clean(): Promise<void>;
declare function dev(options: AdminDevConfig): Promise<void>;
export { build, dev, watch, clean };
export type { AdminBuildConfig, AdminDevConfig };
//# sourceMappingURL=index.d.ts.map