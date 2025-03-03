const config: AppConfig = {
    apiUrl: "https://api.example.com",
    retryCount: 3,
};

initializeApp(config); 

console.log("Application initialized with config:", config);
