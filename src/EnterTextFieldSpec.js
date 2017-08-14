'use strict';

import chai, { expect } from 'chai';
import sinon, { stub } from 'sinon';
import EnterTextField from './EnterTextField';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('EnterTextField', () => {

    let testObject;
    let onEnterKeyPress;

    beforeEach(() => {
        onEnterKeyPress = sinon.stub();
        testObject = new EnterTextField({onEnterKeyPress});
    });

    describe('#handleKeyPress()', () => {
        it('ignores most key presses', () => {
            testObject.handleKeyPress({charCode: 20});
            testObject.handleKeyPress({charCode: 22});
            testObject.handleKeyPress({charCode: 130});
            testObject.handleKeyPress({charCode: 10});

            expect(onEnterKeyPress).not.to.have.been.called;
        });

        it('fires event when enter key is pressed', () => {
            const input = {charCode: 13}
            testObject.handleKeyPress(input);

            expect(onEnterKeyPress).to.have.been.calledWith(input);
        });
    });
});

