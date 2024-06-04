import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ServerData = () => {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000');

    socket.on('event', (data) => {
      return (
        <div>
          <table>
            <tr>
              <td>{data}</td>
            </tr>
          </table>
        </div>
      );
    });

    return () => {
      socket.disconnect();
    };
  });
};

export default ServerData;