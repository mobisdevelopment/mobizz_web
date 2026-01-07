import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO } from "@/constants/constants";

export async function POST(req: Request) {
  try {
    const { messages = [], userMessage } = await req.json();

    const apiKey = process.env.GOOGLE_GENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    console.log("Using API Key:", apiKey);

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const systemInstruction = `
        Ești Asistentul Virtual oficial MobizzApp.
        Misiunea ta este să ajuți utilizatorii și potențialii parteneri cu informații despre platformă.
        
        DETALII COMPANIE:
        - Nume: ${COMPANY_INFO.name}
        - Locație: Bacău, România.
        - Email: ${COMPANY_INFO.email}
        
        DETALII APP:
        - Este un "Super-App" pentru rezervări servicii (saloane, clinici, sport) și comenzi mâncare (restaurante).
        - Moduri: Verde (Saloane/Servicii) și Portocaliu (Food).
        - Pentru utilizatori: Aplicația este GRATUITĂ.
        
        REGULI RĂSPUNS:
        - Fii politicos, profesionist și concis.
        - Răspunde exclusiv în limba română.
        - Dacă nu știi ceva sigur, direcționează utilizatorul către pagina de Contact sau email: ${COMPANY_INFO.email}.
        - Nu inventa funcționalități care nu sunt menționate.
        - IMPORTANT: Folosește un ton clar și direct.
      `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `Context Sistem: ${systemInstruction}` }],
        },
        ...messages.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        { role: "user", parts: [{ text: userMessage }] },
      ],
    });

    return NextResponse.json({
      text:
        response.text ||
        "Îmi pare rău, am întâmpinat o eroare. Te rog să încerci din nou.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
