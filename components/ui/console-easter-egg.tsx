"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(`
                         __                                             
                        /  |                                            
 __   __   __   ______  $$ |  _______   ______   _____  ____    ______  
/  | /  | /  | /      \ $$ | /       | /      \ /     \/    \  /      \ 
$$ | $$ | $$ |/$$$$$$  |$$ |/$$$$$$$/ /$$$$$$  |$$$$$$ $$$$  |/$$$$$$  |
$$ | $$ | $$ |$$    $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$    $$ |
$$ \_$$ \_$$ |$$$$$$$$/ $$ |$$ \_____ $$ \__$$ |$$ | $$ | $$ |$$$$$$$$/ 
$$   $$   $$/ $$       |$$ |$$       |$$    $$/ $$ | $$ | $$ |$$       |
 $$$$$/$$$$/   $$$$$$$/ $$/  $$$$$$$/  $$$$$$/  $$/  $$/  $$/  $$$$$$$/ 


thanks for checking my portfolio!
- GitHub: https://github.com/alessandro-arg
- LinkedIn: https://www.linkedin.com/in/alessandro-argenziano/
    `);
  }, []);

  return null;
}
