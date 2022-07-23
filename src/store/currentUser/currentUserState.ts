import { useCallback } from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

import { RecoilAtomKeys, RecoilSelectorKeys } from '@/store/recoilKeys';

type CurrentUserType = {
  id: number;
  name: string;
};

const currentUserState = atom<CurrentUserType | null>({
  default: null,
  key: RecoilAtomKeys.CURRENT_USER_STATE,
});

export const currentUserActions = {
  useSetCurrentUser: () => {
    const setRecoilState = useSetRecoilState(currentUserState);
    return useCallback(
      (currentUser: CurrentUserType) => {
        setRecoilState(() => {
          return currentUser;
        });
      },
      [setRecoilState]
    );
  },
};

const getCurrentUser = selector<CurrentUserType | null>({
  get: ({ get }) => get(currentUserState),
  key: RecoilSelectorKeys.CURRENT_USER,
});

export const currentUserSelectors = {
  useGetCurrentUser: () => useRecoilValue(getCurrentUser),
};
