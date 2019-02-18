import Filter from './filter';
import originalFakeData from '../index.spec.data.json';
import originalServersFakeData from '../servers.spec.data.json';

const textSearchCriterion = {
  property: null,
  operator: 'contains',
  value: 'aaron',
};

const columns = [{
  name: 'firstName',
  filterable: true,
  searchable: true,
  type: 'string',
}, {
  name: 'lastName',
  filterable: true,
  searchable: true,
  type: 'string',
}, {
  name: 'email',
}, {
  name: 'birth',
  filterable: true,
  type: 'date',
}];

const serverColumns = [{
  name: 'cpu',
  filterable: true,
  type: 'number',
}, {
  name: 'up',
  filterable: true,
  type: 'boolean',
}, {
  name: 'purpose',
  filterable: true,
  type: 'options',
}];

const fakeData = angular.copy(originalFakeData);
const serversFakeData = angular.copy(originalServersFakeData);


describe('Filter', () => {
  let filter;

  it('should pass', () => {
    filter = new Filter([textSearchCriterion], columns);
    expect(filter.searchableColumns).toEqual([
      'firstName',
      'lastName',
    ]);
  });

  describe('itemContainsText', () => {
    let item;

    beforeEach(() => {
      filter = new Filter([textSearchCriterion], columns);
      item = {
        firstName: 'aabbb',
        lastName: 'ccccc',
      };
    });

    it("should find text containing 'aa' in object", () => {
      const needle = 'aa';
      const contains = filter.itemContainsText(item, needle);
      expect(contains).toBe(true);
    });

    it("should not find text containing 'zz' in object", () => {
      const needle = 'zz';
      const contains = filter.itemContainsText(item, needle);
      expect(contains).toBe(false);
    });
  });

  describe('applyFilter', () => {
    it('should apply 1 filter', () => {
      filter = new Filter([textSearchCriterion], columns);
      const filtered = filter.applyFilter(fakeData);
      const expectedLength = 2;
      expect(filtered.length).toBe(expectedLength);
    });
  });

  describe('applyCriteria', () => {
    describe('with search text', () => {
      it('should find text in object', () => {
        filter = new Filter([textSearchCriterion], columns);
        const filtered = filter.applyCriteria(fakeData, textSearchCriterion);
        const expectedLength = 2;
        expect(filtered.length).toBe(expectedLength);
      });
    });

    describe('with string type', () => {
      describe('and contains operator', () => {
        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'contains',
            value: 'aaron',
          });
          const expectedLength = 2;
          expect(filtered.length).toBe(expectedLength);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'containsNot',
            value: 'aaron',
          });
          const expectedLength = 2;
          expect(filtered.length).toBe(fakeData.length - expectedLength);
        });
      });

      describe("and 'contains' operator", () => {
        const expectedResults = 2;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'contains',
            value: 'aaron',
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'containsNot',
            value: 'aaron',
          });
          expect(filtered.length).toBe(fakeData.length - expectedResults);
        });
      });

      describe("and 'starts with' operator", () => {
        const expectedResults = 5;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'startsWith',
            value: 'ron',
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'startsWithNot',
            value: 'ron',
          });
          expect(filtered.length).toBe(fakeData.length - expectedResults);
        });
      });

      describe("and 'ends with' operator", () => {
        const expectedResults = 23;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'lastName',
            operator: 'endsWith',
            value: 'man',
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'lastName',
            operator: 'endsWithNot',
            value: 'man',
          });
          expect(filtered.length).toBe(fakeData.length - expectedResults);
        });
      });

      describe("and 'is' operator", () => {
        const expectedResults = 6;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'is',
            value: 'roger',
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'firstName',
            operator: 'isNot',
            value: 'roger',
          });
          expect(filtered.length).toBe(fakeData.length - expectedResults);
        });
      });
    });

    describe('with number type', () => {
      describe("and 'is' operator", () => {
        const expectedResults = 50;

        it('should filter', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'is',
            value: 4,
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'isNot',
            value: 4,
          });
          expect(filtered.length).toBe(serversFakeData.length - expectedResults);
        });
      });

      describe("and 'smaller' operator", () => {
        const expectedResults = 229;

        it('should filter', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'smaller',
            value: 6,
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'smallerNot',
            value: 6,
          });
          expect(filtered.length).toBe(serversFakeData.length - expectedResults);
        });
      });

      describe("and 'bigger' operator", () => {
        const expectedResults = 145;

        it('should filter', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'bigger',
            value: 8,
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'cpu',
            operator: 'biggerNot',
            value: 8,
          });
          expect(filtered.length).toBe(serversFakeData.length - expectedResults);
        });
      });
    });

    describe('with boolean type', () => {
      describe("and 'is' operator", () => {
        const expectedResults = 238;

        it('should filter', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'up',
            operator: 'is',
            value: true,
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'up',
            operator: 'isNot',
            value: true,
          });
          expect(filtered.length).toBe(serversFakeData.length - expectedResults);
        });
      });
    });

    describe('with options type', () => {
      describe("and 'is' operator", () => {
        const expectedResults = 61;

        it('should filter', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'purpose',
            operator: 'is',
            value: 'database',
          });
          expect(filtered.length).toBe(expectedResults);
        });

        it('should filter (negated)', () => {
          filter = new Filter([], serverColumns);

          const filtered = filter.applyCriteria(serversFakeData, {
            property: 'purpose',
            operator: 'isNot',
            value: 'database',
          });
          expect(filtered.length).toBe(serversFakeData.length - expectedResults);
        });
      });
    });

    describe('with date type', () => {
      describe("and 'is' operator", () => {
        const expectedResults = 1;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'birth',
            operator: 'is',
            value: '1987-11-19',
          });
          expect(filtered.length).toBe(expectedResults);
        });
      });

      describe("and 'isAfter' operator", () => {
        const expectedResults = 582;

        it('should filter', () => {
          filter = new Filter([], columns);

          const filtered = filter.applyCriteria(fakeData, {
            property: 'birth',
            operator: 'isAfter',
            value: '1987-11-19',
          });
          expect(filtered.length).toBe(expectedResults);
        });
      });
    });
  });
});
