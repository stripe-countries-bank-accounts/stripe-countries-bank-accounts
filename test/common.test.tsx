import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { CountryBankAccount } from '../src'

describe('Common render', () => {
    beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }))
    });
    });
    it('renders without crashing',  () => {
        render(<CountryBankAccount /> )
    });
});