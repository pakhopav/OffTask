# OffTask
[KAJ] semestral work
"OffTask" je SPA aplicace reprezentujici "To-Do" sandbox, kde uzivatel muze vytvaret ukoly-tasky a rozmistovat a kombinovat je podle vetsich containeru-skupin na panelu jak chce. Aplikace pamatuje pozice jednotlivych tasku a skupin, souradnice jsou ulozene do localStorage. Aplicace funguje i bez internetu.
Funkcnost:
1)Vytvorit task je mozne kliknutim na tlacitko "NEW TASK" v horni casti aplikace. Zobrazi se formular kde je mozne nastavit:
  a. Nazev 
  b. Popis
  c. Deadline tasku
  d. Barvu
  e. specifikovat podulohy hlavniho tasku. Kazda poduloha musi mit nazev
  
  behem upravovani formulare aplikace kresli "template" odpovidajici budoucimu tasku.
  po kliknuti tlacitka "Create task" formular zmizi a uzivatel je povinen pomoci drag&dropu premistit novy task na hlavni panel. 
  
2) Vytvorit skupinu uzivatel muze pomoci tlacitka "NEW GROUP". Proces vytvareni je podobny. Skupina ale ma jenom:
  a.Nazev
  b.Barvu
  
3) Zaradit task do skupiny lze taky drag&dropem.

4) Task je mozne rozkliknout pro vice informace. V tomto rezimu uzivatel muze zaskrtnout podulohy. 

5) Upravit task lze kliknutim na tlacitko ve tvaru propisky v rezimu rozkliknuteho tasku. Upravovat lze libovolne vlastnosti tasku.

6) Smazat task lze kliknutim na tlacitko ve tvaru kose v rezimu rozkliknuteho tasku.

7) Upravit skupinu lze kliknutim na tlacitko ve tvaru propisky ktere se zobrazi v pravem hornim rohu skupiny, pokud uzivatel umisti nad ni kurzor. Kliknum uzivatel otevre okno upravovani skupiny.

8) Smazat skupinu lze kliknutim na tlacitko ve tvaru kose v rezimu upravovani skupiny.

Souradnicovy system:
  hlavni panel je implicitne rozdelena do 4 sloupcu. Skupina muze byt umistena vzdy pred samotnym taskem.
