# 🚀 JavaScript DSA Practice

[![Daily Practice](https://img.shields.io/badge/Practice-Daily-brightgreen?style=for-the-badge)](https://github.com/sh1v-max/JavaScript-DSA)
[![Language](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Problems Solved](https://img.shields.io/badge/Problems-Growing-blue?style=for-the-badge)](https://github.com/sh1v-max/JavaScript-DSA)

A **daily practice repository** for mastering Data Structures and Algorithms using modern JavaScript. Built on the philosophy of **consistent progress over perfection** — solving 1-2 problems daily to build strong foundations and problem-solving confidence.

> *"It's not about rushing — it's about showing up daily and solving with clarity. One problem at a time. One level up each day."*

## 🎯 Learning Philosophy

### Core Principles
- **📅 Daily Consistency** - Regular practice builds lasting skills
- **🔍 Fundamentals First** - Strong basics before advanced patterns  
- **🧠 Deep Understanding** - Clarity over speed, comprehension over completion
- **⚡ Modern JavaScript** - ES6+ features for clean, concise solutions
- **📊 Complexity Awareness** - Understanding time and space trade-offs

## 📚 Focus Areas & Progress

### 🟢 **Core Data Structures**
| Structure | Status | Key Concepts |
|-----------|--------|--------------|
| **Arrays & Strings** | 🔄 In Progress | Manipulation, traversal, substring problems |
| **Linked Lists** | 📝 Planned | Singly/doubly linked, operations, pointers |
| **Stacks & Queues** | 📝 Planned | LIFO/FIFO operations, applications |
| **Hash Maps & Sets** | 📝 Planned | O(1) lookups, frequency counting |

### 🟡 **Advanced Structures**
| Structure | Status | Key Concepts |
|-----------|--------|--------------|
| **Trees & Graphs** | 📝 Planned | Binary trees, BST, BFS, DFS |
| **Heaps** | 📝 Planned | Priority queues, heap operations |

### 🔵 **Algorithm Patterns**
| Pattern | Status | Key Concepts |
|---------|--------|--------------|
| **Recursion & Backtracking** | 📝 Planned | Base cases, call stack, decision trees |
| **Sorting & Searching** | 📝 Planned | Binary search, merge sort, quick sort |
| **Two Pointers** | 📝 Planned | Left-right, fast-slow pointer techniques |
| **Sliding Window** | 📝 Planned | Fixed/variable window, optimization |
| **Prefix Sum** | 📝 Planned | Cumulative sums, range queries |

## 🛠️ Tech Stack & Standards

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=flat&logo=node.js&logoColor=white)
![LaTeX](https://img.shields.io/badge/LaTeX-Notes-008080?style=flat&logo=latex&logoColor=white)

### Code Quality Standards
- **Modern JavaScript** - ES6+ syntax (arrow functions, destructuring, template literals)
- **Clean Code** - Descriptive naming, logical structure, minimal complexity
- **Comprehensive Comments** - Algorithm explanation, complexity analysis
- **Test Cases** - Multiple scenarios including edge cases
- **Performance Focus** - Time and space complexity documentation

## 🏗️ Repository Structure

```
JavaScript-DSA/
├── 01-Arrays-Strings/
│   ├── easy/
│   │   ├── two-sum.js
│   │   ├── reverse-string.js
│   │   └── valid-palindrome.js
│   ├── medium/
│   │   ├── longest-substring.js
│   │   └── three-sum.js
│   └── README.md
├── 02-Linked-Lists/
│   ├── implementation/
│   │   ├── singly-linked-list.js
│   │   └── doubly-linked-list.js
│   ├── problems/
│   │   ├── reverse-linked-list.js
│   │   └── merge-sorted-lists.js
│   └── README.md
├── 03-Stacks-Queues/
├── 04-Trees-Graphs/
├── 05-Recursion-Backtracking/
├── 06-Sorting-Searching/
├── 07-Algorithm-Patterns/
├── utils/
│   ├── test-helpers.js
│   └── complexity-analyzer.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- Basic JavaScript knowledge
- Problem-solving mindset

### Quick Setup

1. **Clone the repository**
   ```
   git clone https://github.com/sh1v-max/JavaScript-DSA.git
   cd JavaScript-DSA
   ```

2. **Run any solution**
   ```
   # Example: Run a specific problem
   node 01-Arrays-Strings/easy/two-sum.js
   
   # Run with test cases
   node 01-Arrays-Strings/easy/two-sum.js --test
   ```

3. **Explore and practice**
   - Each folder contains problems organized by difficulty
   - Solutions include detailed comments and complexity analysis
   - Test cases provided for verification

## 💡 Solution Template

```
/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Approach: Hash map for O(1) complement lookup
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of two numbers that sum to target
 */
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Test Cases
const testCases = [
    { nums: , target: 9, expected:  },[1][2][3][4]
    { nums: , target: 6, expected:  },[1][2][5][6]
    { nums: , target: 6, expected:  }[5][1]
];

// Run tests
testCases.forEach((test, index) => {
    const result = twoSum(test.nums, test.target);
    console.log(`Test ${index + 1}: ${JSON.stringify(result)} ${
        JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌'
    }`);
});
```

## 📈 Progress Tracking

### Current Stats
- **📊 Problems Solved**: Growing daily
- **🎯 Current Focus**: Arrays and Strings fundamentals  
- **⏱️ Daily Goal**: 1-2 problems with deep understanding
- **🧠 Complexity Analysis**: Time and space for every solution

### Learning Milestones
- [ ] **Foundation Phase** - Master basic data structures (Arrays, Strings, LinkedLists)
- [ ] **Pattern Recognition** - Identify common algorithmic patterns
- [ ] **Optimization Phase** - Focus on time/space complexity improvements
- [ ] **Advanced Topics** - Trees, Graphs, Dynamic Programming
- [ ] **Interview Readiness** - Solve 150+ problems across all difficulty levels

## 🎓 Learning Resources

### Recommended Platforms
- **[LeetCode](https://leetcode.com/)** - Primary practice platform
- **[NeetCode](https://neetcode.io/)** - Curated problem sets
- **[Visualgo](https://visualgo.net/)** - Algorithm visualizations
- **[JavaScript.info](https://javascript.info/)** - Modern JavaScript reference

### Helpful Repositories
- **[trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)** - Comprehensive JS algorithms
- **[TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript)** - Community implementations

## 🔮 Roadmap

### Short Term (1-3 months)
- [ ] Complete Arrays & Strings fundamentals
- [ ] Implement basic LinkedList operations
- [ ] Master Stack & Queue applications
- [ ] Solve 50+ easy problems

### Medium Term (3-6 months)  
- [ ] Advanced data structures (Trees, Graphs)
- [ ] Dynamic programming basics
- [ ] Solve 100+ problems across difficulties
- [ ] Build problem-solving templates

### Long Term (6+ months)
- [ ] Advanced algorithms and optimizations
- [ ] System design problem-solving
- [ ] Contribute to open source DSA projects
- [ ] Mentor other learners

## 🤝 Contributing

Found a better solution? Have suggestions for improvement? Contributions welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/better-solution`)
3. Add your solution with proper documentation
4. Include test cases and complexity analysis
5. Submit a pull request

### Contribution Guidelines
- Follow the established code style and template
- Include detailed comments and complexity analysis
- Add comprehensive test cases
- Ensure solutions are optimal and readable

## 🔗 Related Resources & Learning Community

### Popular JavaScript DSA Repositories
- **[JavaScript DSA Practice](https://github.com/sh1v-max/JavaScript-DSA)** - Personal daily practice repository
- **[Frontend Freaks DSA](https://github.com/FrontendFreaks/DSA-in-JavaScript)** - DSA course with 17 essential topics
- **[DSA TypeScript Implementation](https://github.com/theritikchoure/dsa-typescript)** - Comprehensive DSA with TypeScript solutions
- **[Traversy JS Challenges](https://github.com/bradtraversy/traversy-js-challenges)** - 70+ challenges from algorithms course

### Comprehensive Algorithm Collections
- **[JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms)** - Popular algorithms with detailed explanations
- **[The Algorithms JavaScript](https://github.com/TheAlgorithms/JavaScript)** - Community-driven algorithm implementations
- **[DSA with JavaScript](https://github.com/shvmbisht/DSA-with-Js)** - Data structures and algorithms in JavaScript
- **[Data Structures & Algorithms](https://github.com/sudheerj/datastructures-algorithms)** - Comprehensive DSA implementations

### Learning Topics & Collections
- **[JavaScript Data Structures Topic](https://github.com/topics/javascript-data-structures?l=javascript)** - Curated data structures repositories
- **[DSA Learning Series](https://github.com/topics/dsa-learning-series?l=javascript)** - Educational DSA repositories
- **[DSA with JavaScript Topic](https://github.com/topics/dsa-with-javascript)** - JavaScript-focused DSA resources

### Official NamasteDev Ecosystem
- **[Namaste DSA Repository](https://github.com/sh1v-max/Namaste-Dev)** - Personal DSA learning journey
- **[NamasteDev Organization](https://github.com/namastedev)** - Official GitHub organization
- **[NamasteDev Platform](https://namastedev.com)** - Main learning platform

### Course Repositories
- **[Namaste React](https://github.com/namastedev/namaste-react)** - React.js course implementations
- **[Frontend System Design](https://github.com/namastedev/namaste-frontend-system-design)** - System design concepts
- **[Namaste YouTube](https://github.com/akshaymarch7/namaste-youtube)** - YouTube clone project
- **[Node.js Deep Dive](https://namastedev.com/learn/namaste-node/diving-into-the-nodejs-github-repo)** - Node.js repository exploration
- **[All NamasteDev Repositories](https://github.com/orgs/namastedev/repositories)** - Complete repository list

### Community & Learning
- **[Community React Repository](https://github.com/Bharat2044/Namaste-React)** - Community-driven React learning
- **[Top Frontend GitHub Repos](https://namastedev.com/blog/top-github-repos-for-frontend-devs-2/)** - Curated frontend resources
- **[Git & Development Blog](https://namastedev.com/blog/category/technology-development/git/)** - Git tutorials and guides

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><strong>🎯 Daily Practice • 🧠 Deep Learning • 🚀 Consistent Growth</strong></p>
  <p><em>"The expert in anything was once a beginner who refused to give up."</em></p>
  
  <p>
    <a href="https://github.com/sh1v-max/JavaScript-DSA/issues">🐛 Report Bug</a> •
    <a href="https://github.com/sh1v-max/JavaScript-DSA/issues">💡 Suggest Problem</a> •
    <a href="https://github.com/sh1v-max">👨‍💻 Follow Journey</a>
  </p>
  
  <p><strong>Keep Coding, Keep Growing! 🌱</strong></p>
</div>