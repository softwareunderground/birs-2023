# Website for BIRS 2023 event

**Link to the website:** https://birs-2023.softwareunderground.org

## How to build and serve locally

This website was created using the [Zola](https://www.getzola.org) static site
generator. In order to build the website and serve it locally, you first need
to [install
Zola](https://www.getzola.org/documentation/getting-started/installation/).

Then, clone this repository and move to the downloaded folder:

```bash
git clone https://www.github.com/softwareunderground/birs-2023
cd birs-2023
```

And use Zola to build and serve the website:

```bash
zola serve
```

You can now checkout the built website through the link prompted to you. By
default it should be [http://localhost:1111](http://localhost:1111).

If you are tweaking with the website, Zola will rebuild and update it as you
edit it, so yo don't need to rerun `zola serve` to view the changes.


## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
