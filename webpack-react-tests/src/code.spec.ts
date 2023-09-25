// 1. Import the testing tools
import { describe, it, LogAreas, runrun, Runner } from '@cva/run-figma-run';
//    including you assertion library of choice
import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires

//console.clear();
runrun.enableLogging(LogAreas.all);

// 2. Define your tests
//
//    The code below can be moved to another file and simply be imported here
//    That way you can better organize your tests by
//    splitting them into multiple files and importing all of them here
describe('Math operations', function MathOps() {
  console.log(`runrun:suite MathOps describe: ${describe === (runrun.constructor as any).describe ? 'not replaced' : 'replaced'}`);
  // Math operations > definition
  describe('Addition', function Addition() {
    console.log(`runrun:suite Addition describe: ${describe === (runrun.constructor as any).describe ? 'not replaced' : 'replaced'}`);
    it('should add two numbers', async function firstTest() {
      console.log(`runrun:unit firstTest describe: ${Object.keys(this)}`);
      // Test code here
      expect(1 + 1).to.equal(2);
    });
  });
});

// 3. Run the tests
//    it will automatically show the report UI
//    and update it with the test results when they are ready
runrun
  .run()
  .then((res) => {
    console.log('Tests finished', res);
  })
  .catch(console.log);
