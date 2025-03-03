interface AppConfig {
    apiUrl: string;
    retryCount: number;
}

declare function initializeApp(config: AppConfig): void;
