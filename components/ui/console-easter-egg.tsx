"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(`
thanks for checking my portfolio!
- GitHub: https://github.com/alessandro-arg
- LinkedIn: https://www.linkedin.com/in/alessandro-argenziano/
    `);
  }, []);

  return null;
}
