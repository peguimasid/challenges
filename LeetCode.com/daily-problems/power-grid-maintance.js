/**
 * @param {Map<number, number>} graph
 * @param {number} station
 * @param {Set<number>} offlineStations
 * @return {number}
 */
function getSmallestOperationalStation(graph, station, offlineStations) {
  const visitedNodes = new Set();
  let result = Number.POSITIVE_INFINITY;

  if (!offlineStations.has(station)) return station;

  const traverse = (s) => {
    visitedNodes.add(s);
    if (!offlineStations.has(s)) {
      result = Math.min(result, s);
    }
    for (const neighbor of graph.get(s) ?? []) {
      if (!visitedNodes.has(neighbor)) traverse(neighbor);
    }
  };

  traverse(station);

  return result === Number.POSITIVE_INFINITY ? -1 : result;
}

/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
function processQueries(c, connections, queries) {
  const graph = connections.reduce((map, [c1, c2]) => {
    return map
      .set(c1, (map.get(c1) || []).concat(c2))
      .set(c2, (map.get(c2) || []).concat(c1));
  }, new Map());

  const offlineStations = new Set();

  return queries.reduce((acc, [queryType, station]) => {
    if (queryType === 1) {
      acc.push(getSmallestOperationalStation(graph, station, offlineStations));
    }
    if (queryType === 2) {
      offlineStations.add(station);
    }
    return acc;
  }, []);
}

// prettier-ignore
console.log(processQueries(5, [[1,2],[2,3],[3,4],[4,5]], [[1,3],[2,1],[1,1],[2,2],[1,2]])) // [3,2,3]
// prettier-ignore
console.log(processQueries(3, [], [[1,1],[2,1],[1,1]])) // [1,-1]
