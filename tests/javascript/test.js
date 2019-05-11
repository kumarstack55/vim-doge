/**
 * This file contains test scenarios and their expected results. You should be
 * able to generate the examples below.
 */

// =============================================================================
// Vanilla
// =============================================================================

/**
 * @param {string} arg1 TODO
 * @param {int} arg2 TODO
 */
function myFunc(arg1: string = 'lol', arg2: int = 2) {
  var a = 2;
}

var myObj = {
  myFunc: function() {
    return function() {
      var a = 2;
    },
  },
};

// =============================================================================
// Node & ES6
// =============================================================================

(arg1 = 'default') => { };

const user = (arg1 = 'default') => (subarg1, subarg2 = 'default') => 5;

const myObj = {
  myFunc: () => {
    return () => {
      //
    },
  },
  name() {
    //
  }
};


// =============================================================================
// Flow js (can be used e.g. in React projects)
// =============================================================================
/**
 * @param {any} one TODO
 * @param {any} two TODO
 * @return {number}: TODO
 */
function add(one: any, two: any = 'default'): number {
  //
}

const bar: number = 2;
let foo: number = 1;
let isOneOf: number | boolean | string = foo; // Works!

// =============================================================================
// Typescript (iirc, if we fix flow, we also fix typescript and vice-versa.)
// =============================================================================
const bar: number = 2;
let foo: number = 1;
let sn: string | null = "bar";
let Easing = "ease-in" | "ease-out" | "ease-in-out" = "ease-in";

function f(x: number, y?: number) {}

export function configureStore(history: History, initialState: object): Store<AppState> {}

/**
 * @return {1 | 2 | 3 | 4 | 5 | 6}: TODO
 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {}

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {}

function isFish(pet: Fish | Bird): pet is Fish {}

function isNumber(x: any): x is number {}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}