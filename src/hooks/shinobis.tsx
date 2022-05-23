import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IShinobi } from '@src/@types';
import { IUseShinobis, IStatus } from '@src/@types/hooks';
import { serviceShinobis } from '@src/services';
import { storages } from '@src/settings';

const useShinobis = (): IUseShinobis => {
  const [shinobis, setShinobis] = useState<IShinobi[]>([]);
  const [status, setStatus] = useState<IStatus>('loading');

  const getById = useCallback(
    (id: number) => shinobis.find((shinobi) => shinobi.id === id),
    [shinobis],
  );

  const updateShinobis = useCallback(async () => {
    try {
      const response = await serviceShinobis.getFirebase();

      await AsyncStorage.setItem(storages.SHINOBIS, JSON.stringify(response));

      setShinobis(response);
      setStatus('success');
    } catch {
      AsyncStorage.getItem(storages.SHINOBIS)
        .then((response) => {
          if (!response) {
            throw Error();
          }

          const value = JSON.parse(response);

          if (!Array.isArray(value)) {
            throw Error();
          }

          setShinobis(value);
          setStatus('success');
        })
        .catch(() => {
          setStatus('fail');
        });
    }
  }, []);

  useEffect(() => {
    updateShinobis();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { shinobis, status, getById };
};

export { useShinobis };
