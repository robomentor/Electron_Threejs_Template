import Package from "../../package.json";

(window as any).geekros = {
    name: Package.build.productName,
    version: Package.version
}
