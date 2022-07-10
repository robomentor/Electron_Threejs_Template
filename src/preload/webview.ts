import * as electron from "electron";
import Package from "../../package.json";
import os from "os";
const fs = require("fs");
const usb_detection = require("usb-detection");
const serialport = require("serialport");
const delimiter = require("@serialport/parser-delimiter");

(window as any).geekros = {
    name: Package.build.productName,
    version: Package.version,
    platform: os.type() === "Windows_NT" ? "windows" : "mac",
    process: process,
    interface: electron,
    fs: fs,
    device: {
        usb: usb_detection,
        serial: serialport,
        delimiter: delimiter
    },
    storage: {
        path: ""
    },
    mode: window.localStorage.getItem("geek_run_mode") ? window.localStorage.getItem("geek_run_mode") : "local"
}
