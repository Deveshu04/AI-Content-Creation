import React from 'react';

interface ErrorBannerProps {
  error: string | null;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
      <h3 className="font-bold">Content Generation Error</h3>
      <p className="mt-2">
        We're currently experiencing issues with our AI model provider. This may be due to one of the following reasons:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>The model (MBZUAI/LaMini-T5-738M) may have been discontinued or updated by Hugging Face</li>
        <li>There might be temporary service disruptions with the inference API</li>
        <li>The model endpoint configuration may have changed</li>
      </ul>
      <p className="mt-2">
        Our team is working to resolve this issue. In the meantime, you can try again later or contact support for assistance.
      </p>
      <div className="mt-3 text-sm">
        <p className="font-semibold">Technical Details:</p>
        <p className="font-mono bg-red-100 p-2 rounded mt-1 overflow-x-auto">
          {error}
        </p>
      </div>
    </div>
  );
};

export default ErrorBanner; 