export type OptionType<T = never> = {
  onCompleted: (data?: T) => void | Promise<void>;
  onFailed: () => void | Promise<void>;
};
