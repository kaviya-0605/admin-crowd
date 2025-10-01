// import React from 'react';
// import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// interface Alert {
//   id: string;
//   type: 'fire' | 'medical' | 'missing' | 'security';
//   message: string;
//   location: string;
//   timestamp: string;
//   priority: 'high' | 'medium' | 'low';
// }

// interface EmergencyAlertsProps {
//   alerts: Alert[];
//   onDismiss: (id: string) => void;
// }

// const alertColors = {
//   fire: 'bg-red-500 border-red-600',
//   medical: 'bg-orange-500 border-orange-600',
//   missing: 'bg-amber-500 border-amber-600',
//   security: 'bg-purple-500 border-purple-600',
// };

// const priorityColors = {
//   high: 'text-red-600 bg-red-100',
//   medium: 'text-amber-600 bg-amber-100',
//   low: 'text-green-600 bg-green-100',
// };

// export default function EmergencyAlerts({ alerts, onDismiss }: EmergencyAlertsProps) {
//   if (alerts.length === 0) return null;

//   return (
//     <div className="mb-6">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`${alertColors[alert.type]} text-white p-4 rounded-lg mb-3 shadow-lg animate-pulse`}
//         >
//           <div className="flex items-start justify-between">
//             <div className="flex items-start space-x-3">
//               <AlertTriangle className="w-6 h-6 mt-0.5 flex-shrink-0" />
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="font-bold text-sm uppercase tracking-wide">
//                     {alert.type} Alert
//                   </span>
//                   <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[alert.priority]}`}>
//                     {alert.priority.toUpperCase()}
//                   </span>
//                 </div>
//                 <p className="font-medium mb-2">{alert.message}</p>
//                 <div className="flex items-center space-x-4 text-sm opacity-90">
//                   <div className="flex items-center space-x-1">
//                     <MapPin className="w-4 h-4" />
//                     <span>{alert.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-4 h-4" />
//                     <span>{alert.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => onDismiss(alert.id)}
//               className="text-white hover:text-gray-200 transition-colors ml-4"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






// import React from 'react';
// import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// interface Alert {
//   id: string;
//   type: 'fire' | 'medical' | 'missing' | 'security';
//   message: string;
//   location: string;
//   timestamp: string;
//   priority: 'high' | 'medium' | 'low';
// }

// interface EmergencyAlertsProps {
//   alerts: Alert[];
//   onDismiss: (id: string) => void;
// }

// const alertColors = {
//   fire: 'bg-red-500 border-red-600',
//   medical: 'bg-orange-500 border-orange-600',
//   missing: 'bg-amber-500 border-amber-600',
//   security: 'bg-purple-500 border-purple-600',
// };

// const priorityColors = {
//   high: 'text-red-600 bg-red-100',
//   medium: 'text-amber-600 bg-amber-100',
//   low: 'text-green-600 bg-green-100',
// };

// export default function EmergencyAlerts({ alerts, onDismiss }: EmergencyAlertsProps) {
//   if (alerts.length === 0) return null;

//   return (
//     <div className="mb-6">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`${alertColors[alert.type]} text-white p-3 rounded-lg mb-2 shadow-lg animate-pulse`}
//         >
//           <div className="flex items-start justify-between">
//             <div className="flex items-start space-x-2">
//               <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2 mb-1">
//                   <span className="font-bold text-xs uppercase tracking-wide">
//                     {alert.type} Alert
//                   </span>
//                   <span className={`px-1.5 py-0.5 text-xs rounded-full ${priorityColors[alert.priority]}`}>
//                     {alert.priority.toUpperCase()}
//                   </span>
//                 </div>
//                 <p className="text-sm font-medium mb-1">{alert.message}</p>
//                 <div className="flex items-center space-x-3 text-xs opacity-90">
//                   <div className="flex items-center space-x-1">
//                     <MapPin className="w-3 h-3" />
//                     <span>{alert.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-3 h-3" />
//                     <span>{alert.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => onDismiss(alert.id)}
//               className="text-white hover:text-gray-200 transition-colors ml-2"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }





// import React from 'react';
// import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// // Type definitions
// export type AlertType = 'fire' | 'medical' | 'missing' | 'security';
// export type PriorityLevel = 'high' | 'medium' | 'low';

// export interface Alert {
//   id: string;
//   type: AlertType;
//   message: string;
//   location: string;
//   timestamp: string;
//   priority: PriorityLevel;
// }

// export interface EmergencyAlertsProps {
//   alerts: Alert[];
//   onDismiss: (id: string) => void;
// }

// // Style configurations
// // Style configurations
// const alertColors: Record<AlertType, string> = {
//   fire: 'bg-red-50 border-red-200 text-red-900 border-l-4 border-l-red-500',
//   medical: 'bg-blue-50 border-blue-200 text-blue-900 border-l-4 border-l-blue-500',
//   missing: 'bg-cyan-50 border-cyan-200 text-cyan-900 border-l-4 border-l-cyan-500',
//   security: 'bg-indigo-50 border-indigo-200 text-indigo-900 border-l-4 border-l-indigo-500',
// };

// const priorityColors: Record<PriorityLevel, string> = {
//   high: 'text-red-700 bg-red-100 border border-red-300',
//   medium: 'text-blue-700 bg-blue-100 border border-blue-300',
//   low: 'text-cyan-700 bg-cyan-100 border border-cyan-300',
// };

// const alertIcons: Record<AlertType, string> = {
//   fire: 'text-red-500',
//   medical: 'text-blue-500',
//   missing: 'text-cyan-500',
//   security: 'text-indigo-500',
// };

// // Main component
// const EmergencyAlerts: React.FC<EmergencyAlertsProps> = ({ alerts, onDismiss }) => {
//   if (alerts.length === 0) {
//     return null;
//   }

//   return (
//     <div className="mb-6 space-y-3">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`
//             ${alertColors[alert.type]}
//             rounded-lg p-4 shadow-md transition-all duration-300
//             hover:shadow-lg hover:scale-[1.01]
//             relative overflow-hidden
//           `}
//         >
//           {/* Animated border effect */}
//           <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-pulse opacity-25" 
//                style={{ borderColor: 'currentColor' }} />
          
//           <div className="flex items-start justify-between relative z-10">
//             <div className="flex items-start space-x-3">
//               {/* Animated alert icon */}
//               <div className="relative">
//                 <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${alertIcons[alert.type]}`} />
//                 <div className={`absolute inset-0 animate-ping opacity-75 ${alertIcons[alert.type]}`}>
//                   <AlertTriangle className="w-5 h-5" />
//                 </div>
//               </div>
              
//               <div className="flex-1">
//                 {/* Header with alert type and priority */}
//                 <div className="flex items-center space-x-3 mb-2">
//                   <span className="font-bold text-sm uppercase tracking-wide">
//                     {alert.type} Alert
//                   </span>
//                   <span className={`px-2 py-1 text-xs rounded-full font-semibold ${priorityColors[alert.priority]}`}>
//                     {alert.priority.toUpperCase()}
//                   </span>
//                 </div>
                
//                 {/* Alert message */}
//                 <p className="text-base font-semibold mb-2">{alert.message}</p>
                
//                 {/* Location and timestamp */}
//                 <div className="flex items-center space-x-4 text-sm text-gray-700">
//                   <div className="flex items-center space-x-1">
//                     <MapPin className="w-4 h-4" />
//                     <span className="font-medium">{alert.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-4 h-4" />
//                     <span>{alert.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Dismiss button */}
//             <button
//               onClick={() => onDismiss(alert.id)}
//               className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 
//                          transition-all duration-200 p-1 rounded-full ml-2
//                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               aria-label="Dismiss alert"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmergencyAlerts;







// import React from 'react';
// import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// // Type definitions
// export type AlertType = 'fire' | 'medical' | 'missing' | 'security';
// export type PriorityLevel = 'high' | 'medium' | 'low';

// export interface Alert {
//   id: string;
//   type: AlertType;
//   message: string;
//   location: string;
//   timestamp: string;
//   priority: PriorityLevel;
// }

// export interface EmergencyAlertsProps {
//   alerts: Alert[];
//   onDismiss: (id: string) => void;
// }

// // Style configurations with more intense background colors
// const alertColors: Record<AlertType, string> = {
//   fire: 'bg-red-100 border-red-300 text-red-900 border-l-4 border-l-red-600',
//   medical: 'bg-blue-100 border-blue-300 text-blue-900 border-l-4 border-l-blue-600',
//   missing: 'bg-cyan-100 border-cyan-300 text-cyan-900 border-l-4 border-l-cyan-600',
//   security: 'bg-indigo-100 border-indigo-300 text-indigo-900 border-l-4 border-l-indigo-600',
// };

// const priorityColors: Record<PriorityLevel, string> = {
//   high: 'text-red-800 bg-red-200 border border-red-400',
//   medium: 'text-blue-800 bg-blue-200 border border-blue-400',
//   low: 'text-cyan-800 bg-cyan-200 border border-cyan-400',
// };

// const alertIcons: Record<AlertType, string> = {
//   fire: 'text-red-600',
//   medical: 'text-blue-600',
//   missing: 'text-cyan-600',
//   security: 'text-indigo-600',
// };

// // Main component
// const EmergencyAlerts: React.FC<EmergencyAlertsProps> = ({ alerts, onDismiss }) => {
//   if (alerts.length === 0) {
//     return null;
//   }

//   return (
//     <div className="mb-4 space-y-2">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`
//             ${alertColors[alert.type]}
//             rounded-md p-3 shadow-sm transition-all duration-300
//             hover:shadow-md hover:scale-[1.005]
//             relative overflow-hidden
//           `}
//         >
//           {/* Animated border effect */}
//           <div className="absolute inset-0 border-2 border-transparent rounded-md animate-pulse opacity-30" 
//                style={{ borderColor: 'currentColor' }} />
          
//           <div className="flex items-start justify-between relative z-10">
//             <div className="flex items-start space-x-2">
//               {/* Animated alert icon */}
//               <div className="relative">
//                 <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${alertIcons[alert.type]}`} />
//                 <div className={`absolute inset-0 animate-ping opacity-75 ${alertIcons[alert.type]}`}>
//                   <AlertTriangle className="w-4 h-4" />
//                 </div>
//               </div>
              
//               <div className="flex-1">
//                 {/* Header with alert type and priority */}
//                 <div className="flex items-center space-x-2 mb-1">
//                   <span className="font-bold text-xs uppercase tracking-wide">
//                     {alert.type} Alert
//                   </span>
//                   <span className={`px-1.5 py-0.5 text-xs rounded-full font-semibold ${priorityColors[alert.priority]}`}>
//                     {alert.priority.toUpperCase()}
//                   </span>
//                 </div>
                
//                 {/* Alert message */}
//                 <p className="text-sm font-semibold mb-1 leading-tight">{alert.message}</p>
                
//                 {/* Location and timestamp */}
//                 <div className="flex items-center space-x-3 text-xs text-gray-700">
//                   <div className="flex items-center space-x-1">
//                     <MapPin className="w-3 h-3" />
//                     <span className="font-medium">{alert.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-3 h-3" />
//                     <span>{alert.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Dismiss button */}
//             <button
//               onClick={() => onDismiss(alert.id)}
//               className="text-gray-500 hover:text-gray-700 hover:bg-gray-300 
//                          transition-all duration-200 p-1 rounded-full ml-1
//                          focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500"
//               aria-label="Dismiss alert"
//             >
//               <X className="w-3 h-3" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmergencyAlerts;







import React from 'react';
import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// Type definitions
export type AlertType = 'fire' | 'medical' | 'missing' | 'security';
export type PriorityLevel = 'high' | 'medium' | 'low';

export interface Alert {
  id: string;
  type: AlertType;
  message: string;
  location: string;
  timestamp: string;
  priority: PriorityLevel;
}

export interface EmergencyAlertsProps {
  alerts: Alert[];
  onDismiss: (id: string) => void;
}

// Style configurations with more intense background colors
const alertColors: Record<AlertType, string> = {
  fire: 'bg-red-100 border-red-300 text-red-900',
  medical: 'bg-blue-100 border-blue-300 text-blue-900',
  missing: 'bg-cyan-100 border-cyan-300 text-cyan-900',
  security: 'bg-indigo-100 border-indigo-300 text-indigo-900',
};

const borderColors: Record<AlertType, string> = {
  fire: 'border-red-500',
  medical: 'border-blue-500',
  missing: 'border-cyan-500',
  security: 'border-indigo-500',
};

const priorityColors: Record<PriorityLevel, string> = {
  high: 'text-red-800 bg-red-200 border border-red-400',
  medium: 'text-blue-800 bg-blue-200 border border-blue-400',
  low: 'text-cyan-800 bg-cyan-200 border border-cyan-400',
};

const alertIcons: Record<AlertType, string> = {
  fire: 'text-red-600',
  medical: 'text-blue-600',
  missing: 'text-cyan-600',
  security: 'text-indigo-600',
};

// Main component
const EmergencyAlerts: React.FC<EmergencyAlertsProps> = ({ alerts, onDismiss }) => {
  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`
            ${alertColors[alert.type]}
            rounded-md p-3 shadow-sm transition-all duration-300
            hover:shadow-md hover:scale-[1.005]
            relative overflow-hidden border
          `}
        >
          {/* Animated running border */}
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <div className={`absolute inset-0 border-2 ${borderColors[alert.type]} rounded-md animate-run-border`} />
          </div>
          
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-start space-x-2">
              {/* Animated alert icon */}
              <div className="relative">
                <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${alertIcons[alert.type]}`} />
                <div className={`absolute inset-0 animate-ping opacity-75 ${alertIcons[alert.type]}`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              
              <div className="flex-1">
                {/* Header with alert type and priority */}
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-bold text-xs uppercase tracking-wide">
                    {alert.type} Alert
                  </span>
                  <span className={`px-1.5 py-0.5 text-xs rounded-full font-semibold ${priorityColors[alert.priority]}`}>
                    {alert.priority.toUpperCase()}
                  </span>
                </div>
                
                {/* Alert message */}
                <p className="text-sm font-semibold mb-1 leading-tight">{alert.message}</p>
                
                {/* Location and timestamp */}
                <div className="flex items-center space-x-3 text-xs text-gray-700">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span className="font-medium">{alert.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dismiss button */}
            <button
              onClick={() => onDismiss(alert.id)}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-300 
                         transition-all duration-200 p-1 rounded-full ml-1
                         focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500"
              aria-label="Dismiss alert"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmergencyAlerts;