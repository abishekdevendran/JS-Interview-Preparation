'use strict';
import { describe } from 'mocha';
import { assert } from 'chai';
import { powah } from '../index.js';

describe('powah', function () {
	it('2 raises to 3rd power', function () {
		assert.equal(powah(2, 3), 8);
	});
	it('2 raises to 4th power', function () {
		assert.equal(powah(2, 4), 16);
	});
});
