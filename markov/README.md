## Aufgabe
Berechne die Häufigkeit der Zustände in einer Markov-Kette mit N Iterationen.

Gegeben ist:
- A-A: 0.9
- A-B: 0.075
- A-C: 0.025
- B-A: 0.15
- B-B: 0.8
- B-C: 0.05
- C-A: 0.25
- C-B: 0.25
- C-C: 0.5

## Beispiel
`n: 10_000`  
`{ a: 5923, b: 3137, c: 940 }`

## Funktion
markov(startState, iterations, chancesList);

## Ansatz

```
Matrix:
                  Von:
           A        B     C
       A: 0.9   | 0.15 | 0.25
Nach:  B: 0.075 | 0.8  | 0.25
       C: 0.025 | 0.05 | 0.5

Die Summe der oben dargestellten Tabelle muss Spaltenweise = 1 sein.
x, y und z entsprechen dem Ergebnis des letzten Zustand für jede Zeile


Formel:
Werte von jeder Zeile jeweils mit x, y und z multiplizieren und dann zusammen addieren.
Das ganze für jeden Wert

0,9x+0.15y+0.25z = x
0,075x+0.8y+0.25z = y
0,025x+0.05y+0.5z = z
x+y+z = 1 (Muss immer 1 ergeben)

Mit den 3 Ergebnissen kann dann die Rechnung wieder wiederholt werden.

Beispiel:
Start: A
   zv0    zv1     zv2     zv3
A: 1(x)   0.9    0.8275   0,7745
B: 0(y)   0.075  0.13375  0,17875
C: 0(z)   0.025  0.03875  0,04675
```


