export interface ActivisionModuleOption {
  /**
   * Activision account login
   */
  login: string;

  /**
   * Password for your account
   */
  password: string;

  /**
   * Option for request connection
   */
  ratelimit?: {
    maxRequests?: number;
    perMilliseconds?: number;
    maxRPS?: number;
  }
}
