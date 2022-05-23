import { renderHook } from '@testing-library/react-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useShinobis } from '@src/hooks/shinobis';
import { serviceShinobis } from '@src/services/shinobis';
import { IShinobi } from '@src/@types';

const mockShinobi: IShinobi = {
  chakra: 10,
  id: 7,
  image: '',
  name: 'Kakashi',
  power: 10,
  technique: 18,
};

const mockShinobis = [mockShinobi];

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

const mockAsyncStorageRequest = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify(mockShinobis));
    }, 100);
  });
};

const mockAsyncStorageRequestFail = (): Promise<string> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 100);
  });
};

jest.mock('../../src/services/shinobis');

const mockSerivce = serviceShinobis as jest.Mocked<typeof serviceShinobis>;

const mockServiceRequest = (data: IShinobi[]): Promise<IShinobi[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
};

const mockServiceRequestFail = (): Promise<IShinobi[]> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 100);
  });
};

describe('Hook: useShinobis', () => {
  beforeEach(() => {
    mockSerivce.getFirebase.mockClear();
  });

  describe('Firebase', () => {
    it('Should return a list of competitors', async () => {
      mockSerivce.getFirebase.mockImplementation(() =>
        mockServiceRequest(mockShinobis),
      );

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      expect(result.current.shinobis).toEqual([]);
      expect(result.current.status).toEqual('loading');

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual(mockShinobis);
      expect(result.current.status).toEqual('success');
    });

    it('Must filter the competitor', async () => {
      mockSerivce.getFirebase.mockImplementation(() =>
        mockServiceRequest(mockShinobis),
      );

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.getById(7)).toEqual(mockShinobi);
    });
  });

  describe('No connection', () => {
    it('Should return an empty list', async () => {
      mockSerivce.getFirebase.mockImplementation(() => mockServiceRequest([]));

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual([]);
    });

    it('Should return "undefined" when it does not find the search competitor', async () => {
      mockSerivce.getFirebase.mockImplementation(() => mockServiceRequest([]));

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.getById(7)).toBeFalsy();
    });

    it('Should return an empty shinobis array and the failure status if it cannot perform the firebase request and has nothing stored in the Async Storage', async () => {
      mockSerivce.getFirebase.mockImplementation(mockServiceRequestFail);
      mockAsyncStorage.getItem.mockImplementation(mockAsyncStorageRequestFail);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual([]);
      expect(result.current.status).toEqual('fail');
    });

    it('Should return an array of shinobis and the success status if it cannot make the firebase request, but has data stored in the Async Storage', async () => {
      mockSerivce.getFirebase.mockImplementation(mockServiceRequestFail);
      mockAsyncStorage.getItem.mockImplementation(mockAsyncStorageRequest);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual(mockShinobis);
      expect(result.current.status).toEqual('success');
    });
  });
});
