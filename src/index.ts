"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-12-07
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;


// constructor public
class TS4x {
  constructor(public version: string, public author: string) {
    this.version = version;
    this.author = author;
    this.init();
  }
  init() {
    log(`init`);
  }
}

// public
class TS4x2 {
  public version: string;
  public author: string;
  constructor(version: string, author: string) {
    this.version = version;
    this.author = author;
    this.init();
  }
  init() {
    log(`init`);
  }
}

// private
class TS4x3 {
  private version: string;
  private author: string;
  constructor(version: string, author: string) {
    this.version = version;
    this.author = author;
    this.init();
  }
  init() {
    log(`init`, this.version);
    log(`init`, this.author);
  }
}

// protected
class TS4x4 {
  protected version: string;
  protected author: string;
  constructor(version: string, author: string) {
    this.version = version;
    this.author = author;
    this.init();
  }
  init() {
    log(`init`, this.version);
    log(`init`, this.author);
  }
}



export default TS4x;

export {
  TS4x,
  TS4x2,
  TS4x3,
  TS4x4,
};
