import * as RN from 'react-native';
import { renderHook } from '@testing-library/react-hooks';

import { useLanguage } from '@src/hooks/language';

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
  NativeModules: {
    I18nManager: {
      localeIdentifier: 'en_US',
    },
  },
}));

// mock.setMock(())

describe('Hook: useLanguage', () => {
  it('Android: en_US', async () => {
    const { result } = renderHook(() => useLanguage());

    RN.NativeModules.I18nManager.localeIdentifier = 'en_US';

    const response = result.current.language;

    expect(response.type).toBe('en_US');
  });

  it('Android: pt_BR', async () => {
    const { result } = renderHook(() => useLanguage());

    const response = result.current.language;
    console.log(response.type);
  });
});
