import {useState,useContext,createContext} from 'react'

export const FareContext = createContext();

export const SelectedFlightProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <FareContext.Provider value={{ selectedFlight, setSelectedFlight }}>
      {children}
    </FareContext.Provider>
  );
};

export const useSelectedFlight = () => useContext(FareContext);