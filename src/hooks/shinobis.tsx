import { useState, useCallback, useEffect } from 'react';

import { IShinobi } from '@src/@types';
import { IUseShinobis, IStatus } from '@src/@types/hooks';
import { serviceShinobis } from '@src/services';

import { useStorage } from './storage';

const useShinobis = (): IUseShinobis => {
  const storage = useStorage();

  const [shinobis, setShinobis] = useState<IShinobi[]>([]);
  const [status, setStatus] = useState<IStatus>('loading');

  const getById = useCallback(
    (id: number) => shinobis.find((shinobi) => shinobi.id === id),
    [shinobis],
  );

  const getShinobis = useCallback(async () => {
    try {
      const response = await serviceShinobis.getFirebase();

      await storage.setShinobis(response);

      setShinobis(response);
      setStatus('success');
    } catch {
      const response = await storage.getShinobis();

      if (response.length === 0) {
        setStatus('fail');

        return;
      }

      setShinobis(response);
      setStatus('success');
    }
  }, [storage]);

  useEffect(() => {
    getShinobis();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { shinobis, status, getById };
};

export { useShinobis };
