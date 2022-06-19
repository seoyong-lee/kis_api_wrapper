"use strict";

import { readFileSync } from "fs";
import { join } from "path";
import path from "path";

const __dirname = path.resolve();

function loadFixture(fixtureName) {
  return readFileSync(
    join(__dirname, "fixtures/" + fixtureName + ".json"),
    "UTF8"
  );
}

export const track = loadFixture("track");
