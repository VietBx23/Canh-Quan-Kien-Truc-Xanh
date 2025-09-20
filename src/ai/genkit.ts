import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {geminiPro} from 'genkitx-googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1',
    }),
  ],
});

export const model = geminiPro;
