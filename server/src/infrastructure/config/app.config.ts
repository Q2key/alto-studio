export interface AppConfig {
  port: number;
}

export default (): AppConfig => {
  return {
    port: parseInt(process.env.PORT) ?? 6666,
  };
};
