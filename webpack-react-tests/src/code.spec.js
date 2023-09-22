var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1. Import the testing tools
import { describe, it, Runner } from '@cva/run-figma-run';
//    including you assertion library of choice
import { expect } from 'chai';
// 2. Define your tests
//
//    The code below can be moved to another file and simply be imported here
//    That way you can better organize your tests by
//    splitting them into multiple files and importing all of them here
describe('Math operations', () => {
    describe('Addition', () => {
        it('should add two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
            // Test code here
            expect(1 + 1).to.equal(2);
        }));
    });
});
// 3. Run the tests
//    it will automatically show the report UI
//    and update it with the test results when they are ready
Runner.instance
    .run()
    .then((res) => {
    console.log('Tests finished', res);
})
    .catch(console.log);
