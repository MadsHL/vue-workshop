export interface UssSvar {
  cvrnummer?: number;
  sagsnummer?: string;
  tekniskFejl?: boolean;
  sager?: Map<string, number>;
}
