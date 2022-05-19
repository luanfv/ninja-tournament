import * as RN from 'react-native';
import { renderHook } from '@testing-library/react-hooks';

import { useLanguage } from '@src/hooks/language';

jest.mock('react-native', () => ({
  Platform: {
    OS: jest.fn(),
  },
  NativeModules: {
    I18nManager: {
      localeIdentifier: jest.fn(),
    },
  },
}));

const mockRN = RN as jest.Mocked<typeof RN>;

describe('Hook: useLanguage', () => {
  it('Should be in en_US and return type = en_US', () => {
    mockRN.NativeModules.I18nManager.localeIdentifier = 'en_US';

    const { result } = renderHook(() => useLanguage());

    const response = result.current.language;

    expect(response.type).toBe('en_US');
  });

  it('Should be in fr_FR and return type = en_US', () => {
    mockRN.NativeModules.I18nManager.localeIdentifier = 'fr_FR';

    const { result } = renderHook(() => useLanguage());

    const response = result.current.language;

    expect(response.type).toBe('en_US');
  });

  it('Should be in pt_BR and return type = pt_BR', () => {
    mockRN.NativeModules.I18nManager.localeIdentifier = 'pt_BR';

    const { result } = renderHook(() => useLanguage());

    const response = result.current.language;

    expect(response.type).toBe('pt_BR');
  });
});
