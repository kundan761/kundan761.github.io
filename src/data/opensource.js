import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export const openSourceData = {
  packageName: "indian-kyc-validator",
  description: "Validates PAN, GSTIN, IFSC, phone numbers, and Aadhaar numbers with real checksum logic. 31 passing tests.",
  tags: "Node.js · JavaScript · MIT",
  installCommand: "npm install indian-kyc-validator",
  githubLink: "https://github.com/kundan761/indian-kyc-validator",
  npmLink: "https://www.npmjs.com/package/indian-kyc-validator",
  version: "v1.0.0",
  fileName: "validator.js",
  features: [
    {
      icon: ShieldCheck,
      title: "Real Checksum Logic",
      desc: "Validates using mathematical checksums, not just regex, ensuring accuracy.",
    },
    {
      icon: Zap,
      title: "Zero Dependencies",
      desc: "Ultra-lightweight package that keeps your bundle size small and secure.",
    },
    {
      icon: CheckCircle2,
      title: "Fully Tested",
      desc: "Backed by 31 passing tests covering all edge cases for Indian documents.",
    },
  ],
  codeLines: [
    { text: `import { validatePAN, validateGSTIN, validateAadhaar } from 'indian-kyc-validator';`, cls: "text-[#ff7b72]" },
    { text: `` },
    { text: `const isPanValid = validatePAN('ABCDE1234F');`, cls: "text-[#d2a8ff]" },
    { text: `console.log(isPanValid); // true`, cls: "text-[#79c0ff]" },
    { text: `` },
    { text: `const isGstinValid = validateGSTIN('22AAAAA0000A1Z5');`, cls: "text-[#d2a8ff]" },
    { text: `console.log(isGstinValid); // true`, cls: "text-[#79c0ff]" },
    { text: `` },
    { text: `const isAadhaarValid = validateAadhaar('123456789012');`, cls: "text-[#d2a8ff]" },
    { text: `console.log(isAadhaarValid);`, cls: "text-[#79c0ff]" },
  ]
};
