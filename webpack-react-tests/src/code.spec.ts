// 1. Import the testing tools
import { describe, it, Runner } from '@cva/run-figma-run';
import { RunRunReport } from '@cva/run-figma-run/dist/report';
//    including you assertion library of choice
import { expect } from 'chai';

// 2. Define your tests
//
//    The code below can be moved to another file and simply be imported here
//    That way you can better organize your tests by
//    splitting them into multiple files and importing all of them here
describe('Math operations', () => {
  describe('Addition', () => {
    it('should add two numbers', async () => {
      // Test code here
      expect(1 + 1).to.equal(2);
    });
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
