import { Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, Wifi, WifiHigh, WifiLow, WifiOff, WifiZero } from "lucide-react";
import React, { useState, useEffect } from "react";

const TaskbarRightDeviceInfo = () => {
  const [batteryInfo, setBatteryInfo] = useState(null);
  const [wifiInfo, setWifiInfo] = useState(null);

  useEffect(() => {
    
    navigator.getBattery().then((battery) => {
      const updateBatteryInfo = () => {
        setBatteryInfo({
          level: (battery.level * 100).toFixed(0),
          charging: battery.charging,
        });
      };

      battery.addEventListener("chargingchange", updateBatteryInfo);
      battery.addEventListener("levelchange", updateBatteryInfo);
      updateBatteryInfo();
    });

    
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      const updateWifiInfo = () => {
        setWifiInfo({
          type: connection.effectiveType,
          downlink: connection.downlink,
        });
      };

      connection.addEventListener("change", updateWifiInfo);
      updateWifiInfo();
    }
  }, []);

  const renderBatteryIcon = () => {
    if (batteryInfo.charging) {
      return <BatteryCharging className="w-5 h-5 text-white drop-shadow" />;
    }
    if (batteryInfo.level > 75) {
      return <BatteryFull className="w-5 h-5 text-white drop-shadow" />;
    }
    if (batteryInfo.level > 50) {
      return <BatteryMedium className="w-5 h-5 text-white drop-shadow" />;
    }
    if (batteryInfo.level > 25) {
      return <BatteryLow className="w-5 h-5 text-white drop-shadow" />;
    }
    return <Battery className="w-5 h-5 text-white drop-shadow" />;
  };


  const renderWifiIcon = () => {
    console.log(wifiInfo.downlink)
    if (!wifiInfo) return <WifiOff className="w-5 h-5 text-gray-500 drop-shadow" />;
    if (wifiInfo.downlink > 10) {
      return <Wifi className="w-5 h-5 text-white drop-shadow" />;
    }
    else if (wifiInfo.downlink > 5) {
      return <WifiHigh className="w-5 h-5 text-white drop-shadow" />;
    }
    else if (wifiInfo.downlink > 1) {
      return <WifiLow className="w-5 h-5 text-white drop-shadow" />;
    }
    return <WifiZero className="w-5 h-5 text-white drop-shadow" />;
}
  

  return (
    <div className="flex gap-2 items-center">
      
      <div className="text-center text-sm">
        {batteryInfo ? (
          <>
          {renderBatteryIcon()}
            
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div className="text-center">
        {wifiInfo ? (
          <div className="relative">
            <Wifi className=" absolute w-6 h-6 text-neutral-200/30 drop-shadow" />
            {renderWifiIcon()}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default TaskbarRightDeviceInfo;
