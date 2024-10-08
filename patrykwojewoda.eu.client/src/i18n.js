import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "pl",
    resources: {
      pl: {
        translation: {
          aboutMe: {
            introduction:
              "Cześć, nazywam się Patryk Wojewoda, programista zarówno aplikacji biznesowych, jak i maszyn CNC",
            mainSection:
              "Młody i ambitny programista backend/full-stack, przechodzący z roli operatora i programisty CNC. Chętny do nauki nowych języków programowania i technologii, gotowy na nowe wyzwania w dziedzinie rozwoju oprogramowania. Z 7-letnim doświadczeniem w precyzyjnej i niestandardowej produkcji, wnoszę ze sobą silne umiejętności analityczne i rozwiązywania problemów. Obecnie poszukuję możliwości zmiany kariery na branżę rozwoju oprogramowania, aby wykorzystać swoje techniczne zaplecze i podjąć nowe wyzwania.",
          },

          whyMe: {
            mainQuestion: "Dlaczego warto mnie zatrudnić?",
            reason1: "⚫Mocne zaangażowanie",
          },

          navigation: {
            aboutMe: "O mnie",
            projects: "Projekty",
            references: "Referencje",
            contact: "Kontakt",
          },
          contact: {
            sectionTitle: "Cenne uwagi? Może oferta pracy? Napisz Do mnie!",
            name: "Imię",
            surname: "Nazwisko",
            email: "Adres email",
            phoneNumber: "Telefon",
            phoneNumberPlaceHolder: "(Opcjonalnie)",
            yourMessage: "Twoja wiadomość",
            button: "Wyślij",
          },
          skills: {
            sectionTitle: "Moje umiejętności",
            hardSkills: "Umiejętności twarde",
            language: "Języki",
            polish: "Polski - Ojczysty",
            english: "Angielski - B2",
            softSkills: {
              title: "Umiejętności miękkie",
              communication: "Łatwe nawiązywanie kontaktów",
              analyticalThinking: "Umiejętność analitycznego myślenia",
              timeManagement: "Dobre rozporządzanie czasem",
              taskFocus: "Łatwość w realizowaniu zadań i skupienie na celu",
              selfMotivation: "Chęć i motywacja do nauki i samorozwoju",
            },
          },
          footer: {
            moreInfo: "Wiecej informacji o mnie znajdziesz na",
          },
          swal: {
            sent: "Twoja wiadomość została wysłana!",
          },
        },
      },
      en: {
        translation: {
          aboutMe: {
            introduction:
              "Hi, my name is Patryk Wojewoda, a developer of both business applications and CNC machines.",
            mainSection:
              "Young and ambitious backend/full-stack developer transitioning from a CNC operator and programmer role. Eager to learn new programming languages and technologies, and ready for new challenges in the software development field. With 7 years of experience in precision and custom manufacturing, I bring a strong analytical mindset and problem-solving skills. Currently seeking to shift my career to the software development industry to leverage my technical background and embrace new opportunities.",
          },

          whyMe: {
            mainQuestion: "Why You Should Hire Me?",
            reason1: "⚫Strong Commitment",
          },

          navigation: {
            aboutMe: "About me",
            projects: "Projects",
            references: "References",
            contact: "Contact",
          },
          contact: {
            sectionTitle: "Valuable insights? Maybe a job offer? Contact me!",
            name: "Name",
            surname: "Surname",
            email: "E-mail address",
            phoneNumber: "Phone number",
            phoneNumberPlaceHolder: "(Optional)",
            yourMessage: "Your message",
            button: "Send",
          },
          skills: {
            sectionTitle: "My skills",
            hardSkills: "Hard skills",
            language: "Languages",
            polish: "Polish - Native",
            english: "English - B2",
            softSkills: {
              title: "Soft skills",
              communication: "Ease of making contacts",
              analyticalThinking: "Analytical thinking",
              timeManagement: "Good time management",
              taskFocus: "Ease of task completion and focus on goals",
              selfMotivation:
                "Desire and motivation for learning and self-improvement",
            },
          },
          footer: {
            moreInfo: "You can find more information about me on",
          },
          swal: {
            sent: "Your message has been sent!",
          },
        },
      },
    },
  });

export default i18n;
