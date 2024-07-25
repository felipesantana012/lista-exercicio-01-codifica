import React, { useState } from "react";
import axios from "axios";

const IPInfo = () => {
  const [ip, setIp] = useState("");
  const [erro, setErro] = useState("");
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscar = async (ip) => {
    setIpData(null);
    setErro("");
    setLoading(true);

    try {
      const URL = `https://ipinfo.io/${ip}?token=39c0cff48498a6`;
      const res = await axios.get(URL);
      if (res.status !== 200) {
        setErro("IP não encontrado");
        setLoading(false);
        return;
      }
      setIpData(res.data);
    } catch (e) {
      setErro("Error na requisição, IP invalido");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Busca de IP</h2>
      <input
        type="text"
        placeholder="Digite seu Ip"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button onClick={() => buscar(ip)}>IPInfo</button>
      {loading ? (
        <p>Carregando...</p>
      ) : ipData ? (
        <div>
          <p>IP: {ipData.ip}</p>
          <p>Cidade: {ipData.city}</p>
          <p>Região: {ipData.region}</p>
        </div>
      ) : (
        erro && <p>{erro}</p>
      )}
    </div>
  );
};

export default IPInfo;
