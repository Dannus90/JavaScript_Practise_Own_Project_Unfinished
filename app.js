// Random ID Code
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).uuidv4 = e();
  }
})(function () {
  return (function () {
    return function e(n, r, t) {
      function o(f, u) {
        if (!r[f]) {
          if (!n[f]) {
            var a = "function" == typeof require && require;
            if (!u && a) return a(f, !0);
            if (i) return i(f, !0);
            var p = new Error("Cannot find module '" + f + "'");
            throw ((p.code = "MODULE_NOT_FOUND"), p);
          }
          var y = (r[f] = { exports: {} });
          n[f][0].call(
            y.exports,
            function (e) {
              return o(n[f][1][e] || e);
            },
            y,
            y.exports,
            e,
            n,
            r,
            t
          );
        }
        return r[f].exports;
      }
      for (
        var i = "function" == typeof require && require, f = 0;
        f < t.length;
        f++
      )
        o(t[f]);
      return o;
    };
  })()(
    {
      1: [
        function (e, n, r) {
          for (var t = [], o = 0; o < 256; ++o)
            t[o] = (o + 256).toString(16).substr(1);
          n.exports = function (e, n) {
            var r = n || 0,
              o = t;
            return [
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
            ].join("");
          };
        },
        {},
      ],
      2: [
        function (e, n, r) {
          var t =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof window.msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto));
          if (t) {
            var o = new Uint8Array(16);
            n.exports = function () {
              return t(o), o;
            };
          } else {
            var i = new Array(16);
            n.exports = function () {
              for (var e, n = 0; n < 16; n++)
                0 == (3 & n) && (e = 4294967296 * Math.random()),
                  (i[n] = (e >>> ((3 & n) << 3)) & 255);
              return i;
            };
          }
        },
        {},
      ],
      3: [
        function (e, n, r) {
          var t = e("./lib/rng"),
            o = e("./lib/bytesToUuid");
          n.exports = function (e, n, r) {
            var i = (n && r) || 0;
            "string" == typeof e &&
              ((n = "binary" === e ? new Array(16) : null), (e = null));
            var f = (e = e || {}).random || (e.rng || t)();
            if (((f[6] = (15 & f[6]) | 64), (f[8] = (63 & f[8]) | 128), n))
              for (var u = 0; u < 16; ++u) n[i + u] = f[u];
            return n || o(f);
          };
        },
        { "./lib/bytesToUuid": 1, "./lib/rng": 2 },
      ],
    },
    {},
    [3]
  )(3);
});

// Variables

const jokeInput = document.getElementById("text-1");
const nameInput = document.getElementById("text-2");
const ageInput = document.getElementById("number");
const submitBtn = document.querySelector(".btn");
const output = document.querySelector(".output-container");

// Eventlisteners
submitBtn.addEventListener("click", validateFields);

// Error
function showError(input) {
  const formControl = input;
  formControl.style.border = "3px solid red";

  removeStyle(formControl);
}

// Show Error message
function showErrorMessage(input, message) {
  input.classList.add("error");
  input.innerText = message;
  setTimeout(() => {
    input.classList.remove("error");
  }, 3000);
}

// Show success
function showSuccess() {
  jokeInput.style.border = "3px solid green";
  nameInput.style.border = "3px solid green";
  ageInput.style.border = "3px solid green";

  const small = document.querySelector(".small-3");

  small.classList.add("success");
  small.innerText = "You have successfully entered all fields";
  setTimeout(() => {
    small.classList.remove("success");
  }, 3000);

  removeStyle(jokeInput, nameInput, ageInput);
}

// Remove Style
function removeStyle(input, input2, input3) {
  setTimeout(() => {
    input.style.removeProperty("border");
    input2.style.removeProperty("border");
    input3.style.removeProperty("border");
  }, 3000);
}

// Main Function
function validateFields(e) {
  e.preventDefault();

  if (jokeInput.value === "") {
    showError(jokeInput);
    const small = document.querySelector(".small-1");
    showErrorMessage(small, "Please provide a joke");
  }

  if (nameInput.value === "") {
    showError(nameInput);
    const small = document.querySelector(".small-2");
    showErrorMessage(
      small,
      "Please fill in your name with alpabetical characters only"
    );
  }

  if (ageInput.value === "") {
    showError(ageInput);
    const small = document.querySelector(".small-3");
    showErrorMessage(small, "Please enter your age");
  }

  if (
    jokeInput.value !== "" &&
    nameInput.value !== "" &&
    ageInput.value !== ""
  ) {
    showSuccess();
    updateDOM(jokeInput.value, nameInput.value, ageInput.value);
  }
}

// Save DOM Data
let savedLocalStorage1 = [];
let savedLocalStorage2 = [];
let savedLocalStorage3 = [];
let savedLocalStorage4 = [];

// Update local storage

function updateLocalStorage() {
  localStorage.setItem(
    "savedLocalStorage1",
    JSON.stringify(savedLocalStorage1)
  );
  localStorage.setItem(
    "savedLocalStorage2",
    JSON.stringify(savedLocalStorage2)
  );
  localStorage.setItem(
    "savedLocalStorage3",
    JSON.stringify(savedLocalStorage3)
  );
  localStorage.setItem(
    "savedLocalStorage4",
    JSON.stringify(savedLocalStorage4)
  );
}

// Update DOM
function updateDOM(input1, input2, input3) {
  const outputContainer = document.querySelector(".output-container");

  const row = outputContainer.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.innerHTML = `${input1}`;
  cell2.innerHTML = `${input2}`;
  cell3.innerHTML = `${input3}`;
  cell4.innerHTML = `<i class="fas fa-trash-alt id4"></i>`;

  savedLocalStorage1.push({ id: uuidv4(), cell_1: `${input1}` });
  savedLocalStorage2.push({ id: uuidv4(), cell_2: `${input2}` });
  savedLocalStorage3.push({ id: uuidv4(), cell_3: `${input3}` });
  savedLocalStorage4.push({
    id: uuidv4(),
    cell_4: `<i class="fas fa-trash-alt id4"></i>`,
  });

  updateLocalStorage();

  const rows = document.querySelectorAll("tr");
  if (rows.length > 2) {
    resetBounce();
  }
}

window.onload = (e) => {
  function DOMOutput() {
    const sto1 = JSON.parse(localStorage.getItem("savedLocalStorage1"));
    const sto2 = JSON.parse(localStorage.getItem("savedLocalStorage2"));
    const sto3 = JSON.parse(localStorage.getItem("savedLocalStorage3"));
    const sto4 = JSON.parse(localStorage.getItem("savedLocalStorage4"));

    const outputContainer = document.querySelector(".output-container");

    for (let i = 0; i < sto1.length; i++) {
      const row = outputContainer.insertRow(1);

      const cell1 = row.insertCell(0);
      cell1.innerHTML = sto1[i].cell_1;

      const cell2 = row.insertCell(1);
      cell2.innerHTML = sto2[i].cell_2;

      const cell3 = row.insertCell(2);
      cell3.innerHTML = sto3[i].cell_3;

      const cell4 = row.insertCell(3);
      cell4.innerHTML = sto4[i].cell_4;

      // sto1.forEach((item) => {
      //   const cell1 = row.insertCell(0);
      //   cell1.innerHTML = item.cell_1;
      // });

      // sto2.forEach((item) => {
      //   const cell2 = row.insertCell(1);
      //   cell2.innerHTML = item.cell_2;
      // });

      // sto3.forEach((item) => {
      //   const cell3 = row.insertCell(2);
      //   cell3.innerHTML = item.cell_3;
      // });

      // sto4.forEach((item) => {
      //   const cell4 = row.insertCell(3);
      //   cell4.innerHTML = item.cell_4;
      // });
    }
  }

  DOMOutput();
};

// Delete from local Storage

// Reset bounce function
function resetBounce() {
  setTimeout(() => {
    const cell4 = document.querySelectorAll(".fas");
    cell4.forEach((element) => element.classList.remove("fas", "fa-trash-alt"));
  }, 50);

  setTimeout(() => {
    const cell4 = document.querySelectorAll(".id4");
    console.log(cell4);
    cell4.forEach((element) => element.classList.add("fas", "fa-trash-alt"));
  }, 75);
}

// Delete Function
output.addEventListener("click", function clearRow(e) {
  if (e.target.className.includes("fas")) {
    e.target.parentElement.parentElement.remove();

    // Needs to be fixed!

    localStorage.removeItem("savedLocalStorage1");
    localStorage.removeItem("savedLocalStorage2");
    localStorage.removeItem("savedLocalStorage3");
    localStorage.removeItem("savedLocalStorage4");
  }
});
