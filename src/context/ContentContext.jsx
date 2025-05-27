import { useEffect, useState } from "react";
import { createContext } from "react";
import React from "react";
export const ContentContext = createContext(null);
export const ContentProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    content: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseDynamic, responseStatic] = await Promise.all([
          fetch(`/data/DynamicContent/DynamicContent.json?t=${Date.now()}`),
          fetch(`/data/StaticContent/StaticContent.json?t=${Date.now()}`),
        ]);

        if (!responseStatic.ok || !responseDynamic.ok) {
          throw new Error("There has been ann error while fetching data");
        }

        const [dynamicData, staticData] = await Promise.all([
          responseDynamic.json(),
          responseStatic.json(),
        ]);

        setState({
          loading: false,
          content: {
            staticContent: staticData,
            dynamicContent: dynamicData,
          },
          error: null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          loading: false,
          content: {
            staticContent: [],
            dynamicContent: [],
          },
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={{ state }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
