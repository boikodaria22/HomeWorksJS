var getCounter = ((counter) => () => counter ? --counter : 'Отсчет окончен')(counter = 10);
getCounter();
