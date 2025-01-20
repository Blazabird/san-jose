export default () => ({
    upload: {
      provider: 'local', // Default local provider
      providerOptions: {
        sizeLimit: 10000000, // 10MB size limit for files (optional, adjust as needed)
      },
    },
  });
  
